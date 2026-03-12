import emailjs from '@emailjs/browser';

export type EmailProvider = 'gmail' | 'outlook' | 'yahoo' | 'default';

export interface EFormPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface EFormResult {
  provider: EmailProvider;
  providerLabel: string;
  url: string;
}

interface EmailJsConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

const EMAIL_JS_CONFIG: EmailJsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
};

const PROVIDER_LABELS: Record<EmailProvider, string> = {
  gmail: 'Gmail',
  outlook: 'Outlook Web',
  yahoo: 'Yahoo Mail',
  default: 'your default mail app'
};

const getDomainFromEmail = (email: string): string => {
  const parts = email.toLowerCase().trim().split('@');
  return parts.length > 1 ? parts[1] : '';
};

export const detectEmailProvider = (senderEmail: string): EmailProvider => {
  const domain = getDomainFromEmail(senderEmail);

  if (domain.includes('gmail.com') || domain.includes('googlemail.com')) {
    return 'gmail';
  }

  if (
    domain.includes('outlook.com') ||
    domain.includes('hotmail.com') ||
    domain.includes('live.com') ||
    domain.includes('msn.com')
  ) {
    return 'outlook';
  }

  if (
    domain.includes('yahoo.com') ||
    domain.includes('ymail.com') ||
    domain.includes('rocketmail.com')
  ) {
    return 'yahoo';
  }

  return 'default';
};

const encode = (value: string): string => encodeURIComponent(value);

const buildEmailBody = (payload: EFormPayload): string => {
  return [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone?.trim() || 'Not provided'}`,
    `Company: ${payload.company?.trim() || 'Not provided'}`,
    '',
    'Message:',
    payload.message
  ].join('\n');
};

const buildComposeUrl = (
  provider: EmailProvider,
  recipient: string,
  subject: string,
  body: string
): string => {
  const encodedTo = encode(recipient);
  const encodedSubject = encode(subject);
  const encodedBody = encode(body);

  switch (provider) {
    case 'gmail':
      return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedTo}&su=${encodedSubject}&body=${encodedBody}`;
    case 'outlook':
      return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;
    case 'yahoo':
      return `https://compose.mail.yahoo.com/?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;
    default:
      return `mailto:${encodedTo}?subject=${encodedSubject}&body=${encodedBody}`;
  }
};

export const buildEFormResult = (
  payload: EFormPayload,
  recipient: string
): EFormResult => {
  const provider = detectEmailProvider(payload.email);
  const subject = `Website Contact Form - ${payload.name}`;
  const body = buildEmailBody(payload);

  return {
    provider,
    providerLabel: PROVIDER_LABELS[provider],
    url: buildComposeUrl(provider, recipient, subject, body)
  };
};

export const openEFormComposer = (
  payload: EFormPayload,
  recipient: string
): EFormResult => {
  const result = buildEFormResult(payload, recipient);

  if (result.provider === 'default') {
    window.location.href = result.url;
    return result;
  }

  const popup = window.open(result.url, '_blank', 'noopener,noreferrer');
  if (!popup) {
    const fallbackMailto = buildComposeUrl(
      'default',
      recipient,
      `Website Contact Form - ${payload.name}`,
      buildEmailBody(payload)
    );
    window.location.href = fallbackMailto;
    return {
      ...result,
      provider: 'default',
      providerLabel: PROVIDER_LABELS.default,
      url: fallbackMailto
    };
  }

  return result;
};

export const canSendDirectEmail = (): boolean => {
  return Boolean(
    EMAIL_JS_CONFIG.serviceId &&
      EMAIL_JS_CONFIG.templateId &&
      EMAIL_JS_CONFIG.publicKey
  );
};

export const sendContactEmail = async (
  payload: EFormPayload,
  recipient: string
): Promise<void> => {
  if (!canSendDirectEmail()) {
    throw new Error('Email service is not configured.');
  }

  const templateParams = {
    to_name: 'Liffey Mechanical',
    to_email: recipient,
    from_name: payload.name,
    from_email: payload.email,
    from_phone: payload.phone?.trim() || 'Not provided',
    from_company: payload.company?.trim() || 'Not provided',
    subject: `Website Contact Form - ${payload.name}`,
    message: payload.message,
    body: buildEmailBody(payload)
  };

  await emailjs.send(
    EMAIL_JS_CONFIG.serviceId,
    EMAIL_JS_CONFIG.templateId,
    templateParams,
    {
      publicKey: EMAIL_JS_CONFIG.publicKey
    }
  );
};
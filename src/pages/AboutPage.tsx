import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import HeroSection from '../components/common/HeroSection';
import ImageLightbox from '../components/common/ImageLightbox';

const AboutPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection 
        imageUrl="/images/LiffyTrk_bnr.jpg"
        height="50vh"
      />
        {/* Introduction and Mission/Vision Section */}      
        <Box sx={{ pt: 14, pb: 14, backgroundColor: '#fff' }}>        
          <Container maxWidth="lg">
          <Typography variant="h1" component="h1" align="center" gutterBottom color="primary">
            About Us
          </Typography>
          
          <Box sx={{ maxWidth: 800, mx: 'auto', mb: 8 }}>            
            <Typography variant="body1">
              <span style={{ color: '#1e4388', fontWeight: 600 }}>Liffey Mechanical</span> was founded in 2017 with a clear goal: to provide outstanding mechanical services to the local construction industry. We do so with pride, professionalism, and an unwavering dedication to partnership.
            </Typography>
          </Box>

          {/* Mission and Vision within same section */}
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4,
            justifyContent: 'space-between',
          }}>
            <Box sx={{ 
              width: { 
                xs: '100%', 
                md: 'calc(30% - 16px)' 
              } 
            }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  border: '1px solid #e0e0e0'
                }}
              >                
              <Typography variant="h3" component="h2" gutterBottom color="primary">
                  Pride
                </Typography>
                <Typography variant="body1">
                  <span>Liffey Mechanical</span> takes its name from the River Liffey, one of Ireland&apos;s great waterways, which flows through Dublin, Kildare, and Wicklow counties. It symbolizes the pride that Barry Finnerty, founder and president of the company, feels for both his native Ireland and his new home of Canada. We embody the openness and plain talk that is the signature of Irish culture, while embracing the opportunity that Canada offers to newcomers from around the world. 
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ 
              width: { 
                xs: '100%', 
                md: 'calc(30% - 16px)' 
              } 
            }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  border: '1px solid #e0e0e0'
                }}
              >                
              <Typography variant="h3" component="h2" gutterBottom color="primary">
                  Professionalism
                </Typography>
                <Typography variant="body1">
                  Liffey operates under a simple motto: our most recent job is our best calling card. We recognize that a reputation for quality has to be earned anew every day, with every new project—and that constantly delivering the very best in workmanship and service is the key to our growth as a business.  
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ 
              width: { 
                xs: '100%', 
                md: 'calc(30% - 16px)' 
              } 
            }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  border: '1px solid #e0e0e0'
                }}
              >                
              <Typography variant="h3" component="h2" gutterBottom color="primary">
                  Partnership
                </Typography>
                <Typography variant="body1">
                  The cornerstone of Liffey’s business is partnership. Success in the construction industry derives from relationships where all parties pull together to achieve excellence—not just in the physical outcome, but in communication, work processes, and managing challenges. On every project, we view ourselves as partners with a common goal.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
        {/* What We Offer */}          
      <Box sx={{ 
        py: 14, 
        backgroundColor: 'rgba(30, 67, 136, 0.08)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(30, 67, 136, 0.12)',
        borderBottom: '1px solid rgba(30, 67, 136, 0.12)'
      }}>        
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 3 }} color="primary">
            What We Offer
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4,
            alignItems: 'center' 
          }}>
            <Box sx={{ 
              width: { 
                xs: '100%', 
                md: 'calc(50% - 16px)' 
              } 
            }}>
              <Box 
                component="img"
                src="/images/Hero1.jpg"
                alt="What We Offer"
                sx={{ 
                  width: '100%', 
                  height: '400px', 
                  objectFit: 'cover',
                  borderRadius: 2
                }}
              />
            </Box>
            <Box sx={{ 
              width: { 
                xs: '100%', 
                md: 'calc(50% - 16px)' 
              } 
            }}>
              <Typography variant="body1">
                We are an expert mechanical contractor, providing clients in the construction industry with the entire range of services they need to complete projects on time and on budget. Based in Toronto, we work across Ontario—addressing the needs of construction partners in communities both small and large.
              </Typography>
              <Typography variant="body1">
                Our expertise comprises the residential, commercial, and institutional sectors. We provide servicing for new construction, renovation, retrofitting, and emergencies, as well as offering preventative maintenance. 
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
        {/* Our Approach */}
      <Box sx={{ pt: 14, pb: 15, backgroundColor: '#fff' }}>        
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 3 }} color="primary">
            Our Approach
          </Typography>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3
          }}>
            <Box sx={{
              width: {
                xs: '100%',
                sm: 'calc(50% - 12px)',
                md: 'calc(25% - 18px)'
              }
            }}>              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  textAlign: 'center',
                  border: '1px solid #e0e0e0'
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom>
                  Dedicated Management
                </Typography>
                <Typography variant="body2">
                  We designate a dedicated project manager to act as a single point of contact.
                </Typography>
              </Paper>
            </Box>
            <Box sx={{
              width: {
                xs: '100%',
                sm: 'calc(50% - 12px)',
                md: 'calc(25% - 18px)'
              }
            }}>              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  textAlign: 'center',
                  border: '1px solid #e0e0e0'
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom>
                  Transparent Quotes
                </Typography>
                <Typography variant="body2">
                  We develop comprehensive, transparent project quotes, based on years of experience in the industry.
                </Typography>
              </Paper>
            </Box>
            <Box sx={{
              width: {
                xs: '100%',
                sm: 'calc(50% - 12px)',
                md: 'calc(25% - 18px)'
              }
            }}>              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  textAlign: 'center',
                  border: '1px solid #e0e0e0'
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom>
                  Skilled Teams
                </Typography>
                <Typography variant="body2">
                  We assemble teams of tradespeople skilled in all our areas of service, from HVAC and plumbing to hydronics and mechanical wiring.
                </Typography>
              </Paper>
            </Box>
            <Box sx={{
              width: {
                xs: '100%',
                sm: 'calc(50% - 12px)',
                md: 'calc(25% - 18px)'
              }
            }}>              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  textAlign: 'center',
                  border: '1px solid #e0e0e0'
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom>
                  Safety First
                </Typography>
                <Typography variant="body2">
                  We ensure strict adherence to all health and safety protocols, to protect our professionals and our clients.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
        {/* Communication—the Liffey Difference */}
      <Box sx={{ 
        py: 14, 
        backgroundColor: 'rgba(30, 67, 136, 0.08)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(30, 67, 136, 0.12)',
        borderBottom: '1px solid rgba(30, 67, 136, 0.12)'
      }}>        
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 3 }} color="primary">
            Communication—the Liffey Difference
          </Typography>
          <Box sx={{ 
            maxWidth: '800px',
            mx: 'auto'
          }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Experience has taught us that in a complex business like construction, the unexpected is often the norm. That is why we have made clear, ongoing communication a top priority. After vetting the skills of a potential new hire or prospective subcontractor, we ask one final question: &ldquo;How well do you communicate?&rdquo;
            </Typography>
            <Typography variant="body1">
              We do so because we know that communication is the lifeblood of our business. It&apos;s what drives smooth project management, and helps our clients avoid delays, minimize frustration, and maximize savings. We respond fast. (And if we don&apos;t have the answer, we&apos;ll find it soon.) We spell everything out. And we anticipate bottlenecks by keeping our partners up to date. At Liffey, our dedication to communication is what makes us a partner you can rely on.
            </Typography>
          </Box>
        </Container>
      </Box>      
      {/* Executive Team */}
      <Box sx={{ py: 14, backgroundColor: '#fff' }}>        
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 5 }} color="primary">
            Executive Team
          </Typography>
          
          {/* Barry Finnerty Row */}
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4,
            alignItems: 'center',
            mb: 8
          }}>
            {/* Barry Finnerty */}
            <Box sx={{ 
              width: { 
                xs: '100%', 
                md: 'calc(40% - 16px)' 
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Box 
                sx={{ 
                  width: { xs: 300, md: 330 },
                  height: { xs: 300, md: 330 }, 
                  borderRadius: '50%',
                  overflow: 'hidden',
                  mb: 2
                }}
              >
                <Box
                  component="img"
                  src="/images/IMG_8905.jpg"
                  alt="Barry Finnerty"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
            </Box>
            
            {/* Text beside Barry */}
            <Box sx={{ 
              width: { 
                xs: '100%', 
                md: 'calc(60% - 16px)' 
              } 
            }}>
              <Typography variant="h5" component="h3" gutterBottom>
                Barry Finnerty
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Founder and President
              </Typography>
              <Typography variant="body1">
                A native of Ireland, Barry moved to Canada in 2012 with a wealth of experience in European mechanical and plumbing systems. He quickly adapted to his new home, leading union projects for clients that ranged from Correctional Service Canada to GO Transit and the Toronto Transit Commission. In 2018 he established Liffey Mechanical, and in under 10 years he guided the company from a niche provider of residential plumbing services to its current status as a mid-sized, full-service mechanical and plumbing contractor for industrial and commercial clients.
              </Typography>
            </Box>
          </Box>

          {/* Other Team Members Row */}
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            mx: 'auto',
            gap: { xs: 4, md: 4 }
          }}>
              {/* Team Member 2 */}
            <Box sx={{ 
              width: { 
                xs: '100%', 
                sm: 'calc(50% - 16px)',
                md: 'calc(33.33% - 24px)' 
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Box 
                sx={{ 
                  width: { xs: 180, md: 180 },
                  height: { xs: 180, md: 180 }, 
                  borderRadius: '50%',
                  overflow: 'hidden',
                  mb: 2
                }}
              >
                <Box
                  component="img"
                  src="/images/IMG_8897.jpg"
                  alt="Team Member Name"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <Typography variant="h5" component="h3" gutterBottom>
                Team Member Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Operations Manager
              </Typography>
            </Box>
              {/* Team Member 3 */}
            <Box sx={{ 
              width: { 
                xs: '100%', 
                sm: 'calc(50% - 16px)',
                md: 'calc(33.33% - 24px)' 
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Box 
                sx={{ 
                  width: { xs: 180, md: 180 },
                  height: { xs: 180, md: 180 }, 
                  borderRadius: '50%',
                  overflow: 'hidden',
                  mb: 2
                }}
              >
                <Box
                  component="img"
                  src="/images/IMG_8888.jpg"
                  alt="Team Member Name"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <Typography variant="h5" component="h3" gutterBottom>
                Team Member Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Project Manager
              </Typography>
            </Box>
              {/* Team Member 4 */}
            <Box sx={{ 
              width: { 
                xs: '100%', 
                sm: 'calc(50% - 16px)',
                md: 'calc(33.33% - 24px)' 
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Box 
                sx={{ 
                  width: { xs: 180, md: 180 },
                  height: { xs: 180, md: 180 }, 
                  borderRadius: '50%',
                  overflow: 'hidden',
                  mb: 2
                }}
              >
                <Box
                  component="img"
                  src="/images/IMG_8274.JPG"
                  alt="Team Member Name"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <Typography variant="h5" component="h3" gutterBottom>
                Team Member Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Financial Controller
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
        {/* Community Involvement */}
      <Box sx={{ 
        py: 14, 
        backgroundColor: 'rgba(30, 67, 136, 0.08)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(30, 67, 136, 0.12)',
        borderBottom: '1px solid rgba(30, 67, 136, 0.12)'
      }}>        
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 3 }} color="primary">
            Community Involvement
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4,
            alignItems: 'center' 
          }}>
            <Box sx={{ 
              width: { 
                xs: '100%', 
                md: 'calc(50% - 16px)' 
              } 
            }}>
              <Box 
                component="img"
                src="/images/3b13d67a-c025-4152-8bae-94dd985cb341.jpg"
                alt="Community Involvement"
                onClick={() => setLightboxOpen(true)}
                sx={{ 
                  width: '100%', 
                  height: '400px', 
                  objectFit: 'cover',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              />
            </Box>
            <Box sx={{ 
              width: { 
                xs: '100%', 
                md: 'calc(50% - 16px)' 
              } 
            }}>              
            <Typography variant="body1" sx={{ mb: 2 }}>
                Our business depends on strong communities, and we&apos;re proud to do our part. We give back to community through sponsorships of sports teams that embody the Liffey approach: teamwork, camaraderie, and the pursuit of excellence. 
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Liffey has been an ongoing financial supporter of the Toronto Gaels Gaelic football club, who play in the local Gaelic Athletic Association. The Gaels are especially close to Liffey&apos;s heart, as they provided a welcome home for several Liffey employees to find their feet when they first arrived in Canada. 
              </Typography>
              <Typography variant="body1">
                We are also sponsors of the Kensington Rovers FC, perennial competitors in the Toronto Services Soccer League (TSSL), as well as the Prospects to Pro soccer club, a high-performing youth team that plays in the GTA and has even competed internationally. Through our support we show our commitment to a vibrant, healthy society.
              </Typography>
            </Box>
          </Box>

          {/* Second Row - Three Images */}
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 3,
            mt: 6,
            justifyContent: 'center'
          }}>
            <Box sx={{ 
              width: { 
                xs: '100%', 
                sm: 'calc(50% - 12px)',
                md: 'calc(33.33% - 16px)' 
              } 
            }}>
              <Box 
                component="img"
                src="/images/Community/WhatsApp Image 2026-02-03 at 8.55.24 AM.jpeg"
                alt="Community Involvement 1"
                sx={{ 
                  width: '100%', 
                  height: '280px', 
                  objectFit: 'cover',
                  borderRadius: 2
                }}
              />
            </Box>
            <Box sx={{ 
              width: { 
                xs: '100%', 
                sm: 'calc(50% - 12px)',
                md: 'calc(33.33% - 16px)' 
              } 
            }}>
              <Box 
                component="img"
                src="/images/Community/WhatsApp Image 2026-02-03 at 8.55.31 AM.jpeg"
                alt="Community Involvement 2"
                sx={{ 
                  width: '100%', 
                  height: '280px', 
                  objectFit: 'cover',
                  borderRadius: 2
                }}
              />
            </Box>
            <Box sx={{ 
              width: { 
                xs: '100%', 
                sm: 'calc(50% - 12px)',
                md: 'calc(33.33% - 16px)' 
              } 
            }}>
              <Box 
                component="img"
                src="/images/Community/WhatsApp Image 2026-02-03 at 8.55.36 AM.jpeg"
                alt="Community Involvement 3"
                sx={{ 
                  width: '100%', 
                  height: '280px', 
                  objectFit: 'cover',
                  borderRadius: 2
                }}
              />
            </Box>
          </Box>
        </Container>      </Box>

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageUrl="/images/3b13d67a-c025-4152-8bae-94dd985cb341.jpg"
        alt="Community Involvement"
      />
    </Box>
  );
};

export default AboutPage;
      
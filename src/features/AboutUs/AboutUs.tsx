import React from 'react';
import { Footer } from '../Footer';
import { AboutUsInfoDiv } from './Components/AboutUsInfoDiv';
import { HexagonFilled } from '@/components/icons/HexagonFilled';
import { HexagonOutlined } from '@/components/icons/HexagonOutlined';
import crowdevIllustration from '@/assets/svg/imgAboutDraw.svg';
import { CheckCircle, Rocket, Target } from 'phosphor-react';
import { AboutUsDivDevCard } from './Components/AboutUsDivDevCard';
import './style.css';

interface InfoDivData {
  variant: 'red' | 'white';
  title: string;
  description: string;
  card: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
}

// Probablemente sea mejor crear un archivo .json para estos datos.
const aboutUsInfoData: InfoDivData[] = [
    {
    variant: 'red',
    title: 'Revolutionizing Crowdfunding',
    description: 'A platform that redefines crowdfunding by integrating funding with collaboration, empowering developers to innovate and bring impactful software projects to life.',
    card: {
        icon: <Rocket size={64} />,
        title: '5+',
        description: 'Active Community Members'
    }
},
  {
    variant: 'white',
    title: 'Our Mission',
    description: 'To support developers in transforming innovative ideas into meaningful solutions by offering funding, mentorship, and a collaborative community.',
    card: {
      icon: <Target size={64} />,
      title: 'Collaboration',
      description: 'Connect with developers worldwide'
    }
  },
  {
    variant: 'red',
    title: 'Our Vision',
    description: 'To build a global ecosystem where developers can access resources, collaborate, and drive innovation that benefits society and advances the software industry.',
    card: {
      icon: <CheckCircle size={64} />,
      title: 'Innovation',
      description: 'Creating cutting-edge solutions'
    }
  },
];

// Probablemente sea mejor crear un archivo .json para estos datos... Tambien
const developersData = [
  {
    image: 'https://media.discordapp.net/attachments/1281026070736539749/1314797777649270794/imgDevAndy.jpg?ex=67551459&is=6753c2d9&hm=632463bef9cfc7970af97c88c3b5a3881ffc76301d03bf937e5f3997f8397081&=&format=webp',
    name: 'Andy Mota',
    role: 'QA Engineer',
    linkedinUrl: 'https://www.linkedin.com/in/andy/'
  },
  {
    image: 'https://media.discordapp.net/attachments/1281026070736539749/1314797777167056926/imgDevAlexis.jpg?ex=67551459&is=6753c2d9&hm=f9197633bddc04bed04b2925ae00ed75e6a58781c1e96e95f497a2c9a829afd9&=&format=webp', // Reemplazar con las imágenes reales
    name: 'Alexis Ramirez',
    role: 'Frontend Developer',
    linkedinUrl: 'https://linkedin.com/in/alexis'
  },
  {
    image: 'https://media.discordapp.net/attachments/1281026070736539749/1314797791977013288/imgDevPedro.jpg?ex=6755145d&is=6753c2dd&hm=c73a3a6562a460d91ff9673a60b2bdac5abadf4efa55df3a7be4e9e255ff0ab1&=&format=webp',
    name: 'Pedro Encarnación',
    role: 'Frontend Developer',
    linkedinUrl: 'https://www.linkedin.com/in/pedro/'
  },
  {
    image: 'https://media.discordapp.net/attachments/1281026070736539749/1314797778001465385/imgDevFrancisco.jpg?ex=6755145a&is=6753c2da&hm=373be31ce8afff52270c22678d1d7bb141d82c04316aadb8453b6a8a91b99115&=&format=webp',
    name: 'Francisco Ramirez',
    role: 'Frontend Developer',
    linkedinUrl: 'https://www.linkedin.com/in/fran-arm/'
  },
  {
    image: 'https://media.discordapp.net/attachments/1281026070736539749/1314797777435365417/imgDevAnderson.jpg?ex=67551459&is=6753c2d9&hm=5005b7121d597c65fa9fde70db056c5aa8d8dbd7232eaa2793d7c752da919faf&=&format=webp',
    name: 'Anderson Figuereo',
    role: 'Backend Developer',
    linkedinUrl: 'https://www.linkedin.com/in/anderson/'
  },
  {
    image: 'https://media.discordapp.net/attachments/1281026070736539749/1314797776953016380/imgDevAlexanders.jpg?ex=67551459&is=6753c2d9&hm=76b0a8cee952dcfb83fd66eb35c75fc7e6ac7ab0813cf955f3d7b58280add80a&=&format=webp',
    name: 'Alexander Hilario',
    role: 'Backend Developer',
    linkedinUrl: 'https://www.linkedin.com/in/alexander/'
  }
];

// Para agrupar a los devs segun su rol :)
const groupDevelopersByRole = (developers: typeof developersData) => {
  const grouped = developers.reduce((data, dev) => {
    if (!data[dev.role])
    {
      data[dev.role] = [];
    }
    data[dev.role].push(dev);
    return data;
  }, {} as Record<string, typeof developersData>);

  return Object.entries(grouped);
};

export const AboutUs = () => {
  const groupedDevelopers = groupDevelopersByRole(developersData);

  return (
    <div className="about-us-container">
      <div className="main-title">
        <HexagonOutlined className="title-icon left" />
        <span className="empowering-text">Empowering </span>
        <span className="innovators-text">Innovators</span>
        <HexagonFilled className="title-icon right" />
      </div>
      <div className="subtitle">Discover the story behind Crowdevs</div>
      <div className="crowdev-svg-container">
        <img src={crowdevIllustration} className="crowdev-svg" alt="Crowdev illustration" />
      </div>
      {aboutUsInfoData.map((infoDiv, index) => (
        <AboutUsInfoDiv
          key={index}
          variant={infoDiv.variant}
          title={infoDiv.title}
          description={infoDiv.description}
          card={infoDiv.card}
        />
      ))}

      <div className="team-section">
        <div className="team-title-container">
          <HexagonOutlined className="title-icon left" />
          <span className="team-title">Meet Our Team</span>
          <HexagonOutlined className="title-icon right" />
        </div>
        <p className="team-description">Meet the developers behind Crowdevs</p>
        
        <div className="dev-roles-container">
          {groupedDevelopers.map(([role, devs]) => (
            <div key={role} className="dev-role-section">
              <h3 className="dev-role-title">{role}s</h3>
              <div className="dev-cards-container">
                {devs.map((dev, index) => (
                  <AboutUsDivDevCard
                    key={index}
                    image={dev.image}
                    name={dev.name}
                    role={dev.role}
                    linkedinUrl={dev.linkedinUrl}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}; 
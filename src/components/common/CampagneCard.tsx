import React from 'react';
import { Title, Text, Button, Center } from '@mantine/core';

/// FRAN-ARM participation
/*
    Puedes observar rapidamente los parametros del componente.
    Hay algunos parametros que no he agregado, por ejemplo,
    color del texto del boton.

    Si notas que algunos parametros son necesarios, o se require
    segmentar mas las interfaces en algo mas pequeño / compacto, hacermelo saber.
*/
// Codigo robusto, me encanta

interface ContainerProps
{
    title: string;
    description: string;
    backgroundImage?: string;
    buttonText: string;
    buttonColor: string;
    onClick: () => void;
}

const Container: React.FC<ContainerProps> = ({
    title,
    description,
    backgroundImage,
    buttonText,
    buttonColor,
    onClick,
}) => {
    return (
        <div
        style={{
            width: '100%',
            height: '100%',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            color: 'white',
            borderRadius: '15px',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
        <Center>
            <Title order={3}>{title}</Title>
        </Center>
        <Center>
        <Text>{description}</Text>
        </Center>
        <div style={{ textAlign: 'right' }}>
            <Button onClick={onClick} variant="filled" color={buttonColor}><span style={{ color: '#065242' }}>{buttonText}</span></Button>
        </div>
        </div>
    );
};

function CampagneCard({title, description="", backgroundImage="", buttonText="", buttonColor="", onClick=function(){alert('Clean Button.')}} : ContainerProps) {
    return (
        <Container
        title={title}
        description={description}
        backgroundImage={backgroundImage}
        buttonText={buttonText}
        buttonColor={buttonColor}
        onClick={onClick}
        />
    );
};

export default CampagneCard;
import React, { FC } from 'react';
import { Title, Text, Button, Center } from '@mantine/core';
import styles from './CampagneCard.module.css'

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
    onClick: () => void;
}

const Container: FC<ContainerProps> = ({
    title,
    description,
    backgroundImage,
    buttonText,
    onClick,
}) => {
    return (
        <div
        style={{
            backgroundImage: `url(${backgroundImage})`,
        }}
        className={styles.container}
        >
        <Center>
            <Title order={3}>{title}</Title>
        </Center>
        <Center>
        <Text>{description}</Text>
        </Center>
        <div style={{ textAlign: 'right' }}>
            <Button onClick={onClick} variant="filled" >{buttonText}</Button>
        </div>
        </div>
    );
};

function CampagneCardUtils({title, description="", backgroundImage="", buttonText="", onClick=function(){alert('Clean Button.')}} : ContainerProps) {
    return (
        <Container
        title={title}
        description={description}
        backgroundImage={backgroundImage}
        buttonText={buttonText}
        onClick={onClick}
        />
    );
};

export default CampagneCardUtils;
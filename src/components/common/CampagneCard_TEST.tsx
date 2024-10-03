import { Grid } from "@mantine/core";
import React from "react";
import CampagneCard from './CampagneCard';

// Ejemplo de implementacion
function CampagneCard_TEST()
{
  /*
    Los parametros de los botones se añaden aca. Una vez este la Base de Datos actuando,
    se puede hacer una funcion que haga un push sobre el array recogiendo datos de interes... O algo asi.

    Obviamente requeriria modificar esta parte en dado caso.
  */
    const buttons = [
        { title: "Titulo A", buttonText: "Miau triste", alertText: "Miau", span: 12},
        { title: "Titulo B", buttonText: "Miau feliz", alertText: "Waos", span: 2},
        { title: "Titulo C", buttonText: "Miau neutro", alertText: "Perejil", span: 2},
      ];
    
      return(
        <>
            <Grid>
                <Grid.Col span={4}>
                    <CampagneCard
                        title={"Principal"}
                        description={""}
                        backgroundImage={""}
                        buttonText={"Miau Main"}
                        buttonColor="#FFDF64"
                        onClick={() => alert("Hola niño")}
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Grid grow gutter="sm" align="flex-start">
                        {
                        buttons.map((boton, index) => (
                            <Grid.Col key={index} span={boton.span} >
                            <CampagneCard
                                title={boton.title}
                                description={""}
                                backgroundImage={""}
                                buttonText={boton.buttonText}
                                buttonColor="#FFDF64"
                                onClick={() => alert(boton.alertText)}
                            />
                            </Grid.Col>
                        ))
                        }
                    </Grid>
                </Grid.Col>
            </Grid>
        </>
      )
}

export default CampagneCard_TEST;
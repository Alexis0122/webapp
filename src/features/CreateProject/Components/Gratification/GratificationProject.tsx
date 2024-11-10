import { Gratification } from "@/components/common";
import { CreateProjectForm, ProjectGratificationForm } from "@/types/Project";
import { Box, Group, Text } from "@mantine/core";
import React, { FC } from "react";
import { Control, useWatch } from "react-hook-form";

type GratificationProjectProps = {
  control: Control<CreateProjectForm>
}

export const GratificationProject: FC<GratificationProjectProps> = ({ control }) => {
  const gratifications = useWatch({
    control,
    name: 'gratification',
    defaultValue: []
  })

  const onGratificationDelete = (index: number) => {
    // todo: hacer la funcion de eliminar el card
  }

  const content = gratifications?.length ? (
    gratifications?.map((gratification, index) =>(
      <Box key={index}>
        <Gratification
        title={gratification.title}
        image={gratification.imageUrl?.name || "Imagen no disponible"}
        category={gratification.category}
        price={gratification.amount || 0}
        onClose={() =>onGratificationDelete(index)}
        description={gratification.description}
        />
      </Box>
    ))
  ) : (
    <Text ta='center'>No se han agregado Recompensas</Text>
  )


  return(
    <Group>
        {content}
    </Group>
  )
}
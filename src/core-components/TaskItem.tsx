import React from "react";

import { ButtonIcon } from "../components/ButtonIcon";
import { Card } from "../components/Card";
import { InputCheckbox } from "../components/InputCheckbox";
import { Text } from "../components/Text";

import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import { InputText } from "../components/InputText";

export function TaskItem() {
  const [isEditing, setIsEditing] = React.useState(false);

  function handleEditTask() {
    setIsEditing(true);
  }

  function ExistEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox />
          <Text className="flex-1">🛒 Fazer compras da semana</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <ButtonIcon
            icon={XIcon}
            variant="secondary"
            onClick={ExistEditTask}
          />
          <ButtonIcon icon={CheckIcon} variant="primary" />
        </>
      )}
    </Card>
  );
}

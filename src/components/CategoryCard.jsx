import { Card, Text, Button, Group } from "@mantine/core";
import { IconCopy, IconPencil, IconTrash } from "@tabler/icons-react";

const CategoryCard = ({ category, subcategories, onEdit, onHandleSub, onDelete }) => {
  return (
    <Card shadow="sm">
      <Text weight={700} size="lg" style={{ marginBottom: 10 }}>
        {category}
      </Text>
      <Text>{subcategories} subcategories</Text>
      <Group style={{ marginTop: 20 }}>
        <Button size="sm" variant="outline" onClick={onEdit} title="Modifier">
          <IconPencil />
        </Button>
        <Button size="sm" variant="outline" onClick={onHandleSub} title="gerer sous categories">
          <IconCopy />
        </Button>
        <Button size="sm" variant="outline" color="red" onClick={onDelete} title="Supprimer">
          <IconTrash />
        </Button>
      </Group>
    </Card>
  );
};
export default CategoryCard;

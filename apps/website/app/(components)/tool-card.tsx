import { Icon } from "@/components/icons";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  icon: Icon;
}

export function ToolCard({ title, description, icon: Icon }: Props) {
  return (
    <Card className="hover:bg-primary/10 flex flex-row items-center space-x-6 p-6 dark:hover:bg-gray-500/5">
      <Icon className="h-10 w-10" />
      <CardHeader className="flex-1 p-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

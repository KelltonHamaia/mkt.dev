import {
    Alert,
    AlertDescription,
} from "@/components/ui/alert"
import { Terminal } from "lucide-react";
  

type Props = {
    description: string
}
export const AlertItem = ({description}: Props) => {
  return (
    <Alert className="hidden md:block">
      <Terminal className="w-4 h-4" />
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  );
};

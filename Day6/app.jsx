import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ProfileCard() {
  return (
    <Card className="w-80 shadow-lg rounded-2xl overflow-hidden">
      <CardHeader className="flex flex-col items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
        <Avatar className="w-20 h-20 border-4 border-white">
          <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="User" />
          <AvatarFallback>RP</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-bold">Rishabh Pawani</CardTitle>
        <p className="text-sm opacity-80">Backend Developer | AI Enthusiast</p>
      </CardHeader>

      <CardContent className="flex flex-col items-center p-6 gap-4">
        <p className="text-center text-gray-600 text-sm">
          Passionate about building scalable backends and conversational AI
          assistants. Love working with Node.js, Python, and Cloud services.
        </p>

        <div className="flex gap-4">
          <Button variant="outline" size="icon">
            <Mail className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Github className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

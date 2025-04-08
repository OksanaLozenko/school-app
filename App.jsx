import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function SchoolAppPreview() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Домашнє завдання з математики",
      deadline: "2025-04-08",
      status: "відправлено на перевірку",
    },
    {
      id: 2,
      title: "Читання (розділ 3)",
      deadline: "2025-04-09",
      status: "зараховано",
    },
  ]);

  return (
    <div className="p-4 space-y-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold text-center text-gray-700">
        Мій календар
      </h1>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="rounded-md border"
      />

      <div className="space-y-2">
        <h2 className="text-xl font-medium text-gray-600">Завдання</h2>
        {tasks.map((task) => (
          <Card key={task.id} className="bg-white shadow-sm">
            <CardContent className="p-4">
              <p className="text-md font-medium text-gray-800">{task.title}</p>
              <p className="text-sm text-gray-500">Дедлайн: {task.deadline}</p>
              <p className="text-sm text-blue-600">Статус: {task.status}</p>
              <Button variant="outline" size="sm" className="mt-2">
                Задати питання вчителю
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

import lessons from "../data/lessons.json";

export default function Lessons() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Recommended Lessons</h1>
      {lessons.map((lesson) => (
        <div key={lesson.id} className="mt-4 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">{lesson.title}</h2>
          <p className="text-gray-700">{lesson.content}</p>
        </div>
      ))}
    </div>
  );
}

import ActivityDelete from "./ActivityDelete";

export default function ActivityList({ activities }) {
  return (
    <>
      <ul>
        {activities.map((activity) => (
          <>
            <li key={activity.id}>{activity.name}</li>
            <ActivityDelete id={activity.id} />
          </>
        ))}
      </ul>
    </>
  );
}

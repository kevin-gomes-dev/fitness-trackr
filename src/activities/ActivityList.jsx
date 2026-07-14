import ActivityDelete from "./ActivityDelete";

export default function ActivityList({ activities, syncActivities }) {
  return (
    <>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <ActivityDelete id={activity.id} syncActivities={syncActivities} />
          </li>
        ))}
      </ul>
    </>
  );
}

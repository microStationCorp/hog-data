export default function Profile({ params }: { params: { profileID: string } }) {
  return <>profile page-{params.profileID}</>;
}

export default function Page({ params }: { params: { userid: string } }) {
  return <div>Profile: {params.userid}</div>;
}

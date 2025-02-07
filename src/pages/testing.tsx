import Seo from "@/components/content/Seo";

const testing = () => {
  return (
    <div>
      <Seo title="Testing Page" description="Testing Remlex Technologies" />
      testing
      <Tet />
    </div>
  );
};

const Tet = () => {
  return <div>Text</div>;
};
export default testing;

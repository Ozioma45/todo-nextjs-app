import React from "react";
import sample_image from "../../assets/instagram.jpg";
import Image from "next/image";

const Page = ({ params }) => {
  return (
    <div>
      we will show the image here
      <Image src={sample_image} alt="sample image" />
      <Image src={sample_image} alt="sample image" width={500} />
    </div>
  );
};

export default Page;

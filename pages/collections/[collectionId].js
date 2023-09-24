import React from "react";
import { useRouter } from "next/router";

const Collection = () => {
  const router = useRouter();
  console.log(router.query, "query");
  console.log(router.query.CollectionId, "CollectionId");

  return <div>collection</div>;
};

export default CollectionId;

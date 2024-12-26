"use client";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  // const random = getRandomInt(2);
  
  // if (random === 1) {
  //   throw new Error("Something went wrong");
  // }

  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}

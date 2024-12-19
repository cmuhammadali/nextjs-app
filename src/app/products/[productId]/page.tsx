import { Metadata } from "next";

type IProps = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: IProps): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) =>
    setTimeout(() => resolve(`iPhone ${params.productId}`), 100)
  );

  return { title: `Product ${title}` };
};

export default function Product({ params }: IProps) {
  return (
    <div>
      <h1>Product detail {params.productId}</h1>
    </div>
  );
}

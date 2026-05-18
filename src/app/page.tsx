import AddToCardComponent from "@/components/AddToCardComponent";
import BlogComponents from "@/components/BlogComponents";
import Section01 from "@/components/Section01";
import { WordRotate } from "@/components/ui/word-rotate";
import { cardType } from "@/lib/blog/cardType";
import Card from "@/components/Card";
import { section } from "motion/react-client";
export default function Home() {
  const datas: cardType[] = [
    {
      title: "Monstera Plant",
      description: "Beautiful indoor plant with large green leaves.",
      image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=500",
      price: 18.99,
    },

    {
      title: "Peace Lily",
      description: "Elegant flowering plant that improves air quality.",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
      price: 22,
    },

    {
      title: "Aloe Vera",
      description: "Medicinal succulent plant easy to care for.",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500",
      price: 9.99,
    },

    {
      title: "Fiddle Leaf Fig",
      description: "Modern decorative plant for home interiors.",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
      price: 35.99,
    },

    {
      title: "Cactus Collection",
      description: "Small desert plants ideal for desks and shelves.",
      image:
        "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=500",
      price: 14.75,
    },

    {
      title: "Orchid Flower",
      description: "Elegant colorful flowers for decoration.",
      image:
        "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=500",
      price: 19.99,
    },

    {
      title: "Bonsai Tree",
      description: "Mini decorative tree with premium design.",
      image:
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=500",
      price: 45.99,
    },
    {
      title: "Monstera Plant",
      description: "Beautiful indoor plant with large green leaves.",
      image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=500",
      price: 18.99,
    },

    {
      title: "Peace Lily",
      description: "Elegant flowering plant that improves air quality.",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
      price: 22.0,
    },

    {
      title: "Aloe Vera",
      description: "Medicinal succulent plant easy to care for.",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500",
      price: 9.99,
    },

    {
      title: "Fiddle Leaf Fig",
      description: "Modern decorative plant for home interiors.",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
      price: 35.99,
    },

    {
      title: "Cactus Collection",
      description: "Small desert plants ideal for desks and shelves.",
      image:
        "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=500",
      price: 14.75,
    },
  ];

  return (
    <section>
      <Section01/>
      <AddToCardComponent/>
      <div className="grid  my-8 grid-cols-4  max-w-7xl gap-4 mx-auto items-center justify-center  font-sans dark:bg-black">
        {datas.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const page = () => {

  const Images = [
    {src : "/1.jpg"},
    {src : "/4.jpg"},
    {src : "/7.jpg"},
    {src : "/9.jpg"},
    {src : "/10.jpg"},
  ]

  return (
    <div className="bg-gray-900 w-screen">
        <h1 className="text-center text-4xl font-bold text-white p-10">Aryan Ramzan</h1>

        <div className="w-screen flex justify-center items-center">
            <div className="flex flex-col gap-12 justify-center items-center p-10 text-gray-300 font-bold">
              <p>He is a bright and hardworking student, known for his dedication and focus toward academics. As a class topper, he consistently demonstrates strong discipline, excellent time management, and a deep curiosity for learning. His grasp of concepts is not just limited to memorization; he strives to understand subjects thoroughly and applies his knowledge in practical ways. <br/>
              Apart from academic brilliance, he is respectful, humble, and always willing to help classmates who struggle with studies. His confidence is balanced with kindness, making him approachable to peers and admired by teachers. He sets high goals for himself, works persistently to achieve them, and inspires others through his determination and positive attitude.<br/>
              He is not only intelligent but also organized, responsible, and self-motivated, showing qualities of a future leader. His ability to remain calm under pressure and his eagerness to explore new ideas truly set him apart.</p>
              <Image src="/6.jpg" alt="Aryan" width={300} height={300}className="border-2 border-gray-200"/>
            </div>
        </div>

        <div className="w-screen flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold text-white p-10">Memories</h1>
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {Images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <Card>
                        <CardContent>
                            <Image className="aspect-square object-cover w-full h-full rounded-xl" src={image.src} alt="aryan" width={300} height={300} />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    </div>
  )
}

export default page;
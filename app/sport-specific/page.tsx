"use client"

import { CheckCircle } from "lucide-react"
import Balancer from "react-wrap-balancer"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

const Title = () => (
  <>
    <Icons.logo className="w-1/6" />
    <h1 className="self-center text-center text-3xl font-bold italic leading-tight sm:text-4xl md:text-5xl">
      <Balancer>&quot;Compete to Be Elite&quot;</Balancer>
    </h1>
    <h3 className="text-center text-lg italic text-muted-foreground sm:text-xl md:text-2xl">
      <Balancer>
        Sport-specific performance training. Specialized training programs
        designed specifically for each athlete. All conducted training and
        designed programs are by Wil Santi.
      </Balancer>
    </h3>
  </>
)

const LongText = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-center text-3xl font-semibold">
      Speed and Agility Training
    </h3>
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>
        Assessment of current flexibility level, running technique, stride
        length and power
      </li>
      <li>
        Individual-video study of speed, agility, plyometric and weight-training
        technique
      </li>
      <li>
        Dynamic warm-up movement, emphasizing increased flexibility and
        speed/agility enhancement
      </li>
      <li>
        Field work including- form running progression, proper foot strike, knee
        drive and arm action
      </li>
      <li>
        Agility training, including- change of direction and reaction time
        drills specific to demands of each sport
      </li>
    </ul>
    <h3 className="text-center text-3xl font-semibold">
      Weight, Power, and Plyometric Training
    </h3>
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>
        Assessment of current strength level, identification of weaknesses in
        core, lower body and upper body strength
      </li>
      <li>
        Proper form, technique and progression taught in explosive lifts and
        plyometric exercises (jump training)
      </li>
      <li>
        Foam rolling technique and proper warm-up and cool-down implemented in
        each athletes work-out program
      </li>
    </ul>
    <h3 className="text-center text-3xl font-semibold">Nutrition</h3>
    <p>Sports nutrition advice and counseling also available.</p>
    <h3 className="text-center text-3xl font-semibold">Training Location</h3>
    <p>
      I utilize facilities in and around the Nashville area and can train at a
      facility that best suits your schedule and type of training. I&apos;m also
      available to train school teams at their facilities or at local athletic
      fields and tracks.
    </p>
  </div>
)

const Cards = () => (
  <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
    <div className="flex flex-col items-center justify-center gap-4">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">
            <Balancer>Speed and Agility Training</Balancer>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 pt-0">
          <div className="mt-2 text-right">
            <div className="grid grid-cols-5 items-center justify-center">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Assessment of current flexibility level, running technique,
                stride length and power
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Individual-video study of speed, agility, plyometric and
                weight-training technique{" "}
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Dynamic warm-up movement, emphasizing increased flexibility and
                speed/agility enhancement{" "}
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Field work including- form running progression, proper foot
                strike, knee drive and arm action
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Agility training, including- change of direction and reaction
                time drills specific to demands of each sport
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">
            <Balancer>Nutrition</Balancer>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 pt-0">
          <div className="mt-2 text-right">
            <div className="grid grid-cols-5 items-center justify-center">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Individualized nutrition program designed to meet each athletes
                specific needs
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Nutritional supplements recommended to enhance performance and
                recovery
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    <div className="flex flex-col items-center justify-center gap-4">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">
            <Balancer>Weight, Power, & Plyometric Training</Balancer>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 pt-0">
          <div className="mt-2 text-right">
            <div className="grid grid-cols-5 items-center justify-center">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Assessment of current strength level, identification of
                weaknesses in core, lower body and upper body strength
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Proper form, technique and progression taught in explosive lifts
                and plyometric exercises (jump training)
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Foam rolling technique and proper warm-up and cool-down
                implemented in each athletes work-out program
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold">
            <Balancer>Training Location</Balancer>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 pt-0">
          <div className="mt-2 text-right">
            <div className="grid grid-cols-5 items-center justify-center">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                Training sessions are held at the athlete&apos;s home, school,
                or designated training facility
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                I utilize facilities in and around the Nashville area and can
                train at a facility that best suits your schedule and type of
                training
              </p>
            </div>
            <Separator className="my-2" />
            <div className="grid grid-cols-5">
              <div className="flex items-center">
                <CheckCircle className="size-7" color={"#facc15"} />
              </div>
              <p className="col-span-4">
                I&apos;m also available to train school teams at their
                facilities or at local athletic fields and tracks
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
)

export default function SportTraining() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-8">
        <Title />
        <LongText />
        <Cards />
      </div>
    </section>
  )
}

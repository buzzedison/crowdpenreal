import Link from 'next/link';
import Footer from '@/components/Footer'
import Navbar from '@/components/Nav'
import Head from "next/head"

import ChallengeHero from "../components/ChallengeHero"
import Accordion from '../components/Accordion';

const accordionData = [
    {
      title: "Setting",
      content: "Your story can be set anywhere in the world, but it must prominently feature African communities or characters. Consider urban settings, rural landscapes, or even virtual environments."
    },
    {
      title: "Characters",
      content: "Create characters who are pioneers of change. They can be tech innovators, cultural activists, educators, or even children with a unique vision. Their actions should influence or reflect the transformation of their community."
    },
    {
      title: "Themes",
      content: "Feel free to explore themes such as digital empowerment, cultural preservation in a modern world, Afrofuturism, or the impact of global connectivity on local traditions."
    },
    {
      title: "Narrative Style",
      content: "You can write in any style – be it a short story, a narrative poem, or a piece of creative non-fiction. You're encouraged to integrate African storytelling elements, proverbs, or folklore to enrich your narrative."
    },
    {
      title: "Inclusivity",
      content: "Ensure that your story respects and honours the diversity and richness of African cultures. Avoid stereotypes and embrace authenticity and depth in character development and cultural references."
    },
    {
      title: "Length",
      content: "Aim for a story length of 100-3000 words. This range gives you enough space to develop your ideas while keeping the story accessible and engaging."
    },
    {
        title: "Submission Deadline",
        content: (
          <div>
            All entries should be submitted by the 4th of December, 2023. Please share your stories in a readable format (e.g., PDF, Google Doc) via the 
            <Link href="/submission-page"className="text-black hover:text-red-800"> designated submission channel
            </Link>.
          </div>
        )
      },
    {
      title: "Participation",
      content: "This challenge is open to writers of all levels, from seasoned authors to those just beginning their writing journey. We celebrate diversity in perspectives and encourage voices from all corners of the globe to participate."
    }
  ];
  
export default function challenge() {
  return (
    <div>
         <Head>
      <title> Challenge-CrowdPen</title>
    </Head>
    <Navbar/>
        <ChallengeHero/>

        <div className="container mx-auto px-4 md:px-24 py-2 md:py-12">
      <h2 className="text-2xl font-bold mt-10 mb-5">Challenge Guidelines</h2>
      <Accordion data={accordionData} />
 
    </div>
        <Footer/>
    </div>
  )
}


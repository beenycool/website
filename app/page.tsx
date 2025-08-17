"use client";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen text-foreground bg-background">
      <header className="sticky top-0 z-40 backdrop-blur border-b bg-background/70" style={{borderColor: 'var(--border)'}}>
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Dr Moustafa Saoud</a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#services" className="hover:underline underline-offset-4">Expert Witness</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
            {mounted && <ThemeToggle />}
          </nav>
        </div>
      </header>

      <main id="home" className="mx-auto max-w-6xl px-6">
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Dr Moustafa Saoud
            </h1>
            <p className="mt-6 text-lg" style={{color: 'var(--secondary)'}}>
              Consultant Forensic Psychiatrist
            </p>
            <p className="mt-4" style={{color: 'var(--muted)'}}>
              Supporting mental health journeys with professional, confidential, and compassionate care
            </p>
          </div>
        </section>

        <section id="about" className="py-16 sm:py-24 border-t" style={{borderColor: 'var(--border)'}}>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">About</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <p className="mt-4" style={{color: 'var(--secondary)'}}>
                  Dr Moustafa Saoud is a highly experienced Consultant Forensic Psychiatrist with over 20 years in psychiatry. Renowned for his expertise in forensic mental health, Dr Saoud is a member of the Royal College of Psychiatrists and the Expert Witness Institute and holds full registration with the General Medical Council on the Specialist Register for Forensic Psychiatry. As an Approved Clinician, he is authorised under Section 12(2) of the Mental Health Act 1983 to assess and treat complex mental health conditions.
                </p>
                <p className="mt-4" style={{color: 'var(--secondary)'}}>
                  With broad clinical and medicolegal experience, Dr Saoud has worked in high, medium, and low secure forensic settings, including Broadmoor Hospital and Feltham Young Offenders Institution. He specialises in the assessment and management of severe mental disorders, personality disorders, and neurodevelopmental conditions, providing expertise in cases involving diminished responsibility, insanity, and fitness to plead.
                </p>
                <p className="mt-4" style={{color: 'var(--secondary)'}}>
                  As a registered forensic psychodynamic psychotherapist with the British Psychoanalytic Council, Dr Saoud offers thorough assessments and evidence-based treatment, integrating psychiatric expertise with psychotherapy.
                </p>
                <p className="mt-4" style={{color: 'var(--secondary)'}}>
                  In his role as Consultant Forensic Psychiatrist with Sussex Partnership NHS Foundation Trust, Dr Saoud also leads in clinical education as the MSc Psychiatry Course Lead and Clinical Senior Lecturer at Brighton and Sussex Medical School, in addition to being an examiner for the Royal College of Psychiatrists. He supervises higher trainees in forensic psychiatry within Health Education Kent, Surrey, and Sussex.
                </p>
                <p className="mt-4" style={{color: 'var(--secondary)'}}>
                  Dr Saoud is fluent in Arabic and English, enabling him to provide culturally sensitive care and expert testimony for Arabic-speaking clients and their families.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-64 h-80 rounded-lg overflow-hidden border-2 shadow-lg" style={{borderColor: 'var(--border)'}}>
                  <Image
                    src="/dr-saoud-headshot.jpg"
                    alt="Dr Moustafa Saoud - Consultant Forensic Psychiatrist"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 sm:py-24 border-t" style={{borderColor: 'var(--border)'}}>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Expert Witness Services</h2>
            <p className="mt-4" style={{color: 'var(--secondary)'}}>
              Dr Saoud provides high-quality psychiatric reports and expert testimony for Crown Courts, Parole Boards, and tribunals across the UK. His services cover:
            </p>
            <ul className="mt-6 list-disc pl-6 space-y-2" style={{color: 'var(--secondary)'}}>
              <li>Fitness to plead and stand trial</li>
              <li>Comprehensive risk assessments, including stalking and sexual violence</li>
              <li>Mental Health Act disposals</li>
              <li>Capacity evaluations, including intent, diminished responsibility, and automatism</li>
              <li>Vulnerability assessments under the Modern Slavery Act</li>
            </ul>
            <p className="mt-6" style={{color: 'var(--secondary)'}}>
              Skilled in using risk assessment tools such as the HCR-20 v3, PCL-R, and the Stalking Risk Profile, Dr Saoud’s insights are invaluable in both criminal and civil cases.
            </p>
          </div>
        </section>

        <section id="instructions" className="py-16 sm:py-24 border-t" style={{borderColor: 'var(--border)'}}>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Accepting Instructions</h2>
            <p className="mt-4" style={{color: 'var(--secondary)'}}>
              In addition to criminal cases, Dr Saoud is also available for instructions across a variety of case areas, including:
            </p>
            <ul className="mt-6 list-disc pl-6 space-y-2" style={{color: 'var(--secondary)'}}>
              <li>Family Court matters</li>
              <li>Immigration cases</li>
              <li>Housing</li>
              <li>Employment</li>
              <li>Personal injury</li>
              <li>Fitness to practise</li>
            </ul>
          </div>
        </section>

        <section id="private-practice" className="py-16 sm:py-24 border-t" style={{borderColor: 'var(--border)'}}>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Forthcoming Private Practice</h2>
            <p className="mt-4" style={{color: 'var(--secondary)'}}>
              Dr Saoud is preparing to expand his private practice, offering compassionate, recovery-oriented care for individuals facing mental health challenges such as anxiety, depression, PTSD, and complex personality disorders. His practice will provide confidential, personalised treatment, combining psychiatric expertise with psychotherapy.
            </p>
          </div>
        </section>



        <section id="contact" className="py-16 sm:py-24 border-t" style={{borderColor: 'var(--border)'}}>
          <div className="grid gap-6 sm:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
              <p className="mt-4" style={{color: 'var(--secondary)'}}>
                For expert forensic psychiatric consultation, court reporting, or to enquire about private psychiatric services, please get in touch.
              </p>
              <div className="mt-6">
                <a href="mailto:M.Saoud@bsms.ac.uk" className="text-blue-600 dark:text-blue-400 hover:underline">
                  M.Saoud@bsms.ac.uk
                </a>
              </div>
            </div>
            <div>
              <form className="mt-6 grid gap-3" action="mailto:M.Saoud@bsms.ac.uk" method="post" encType="text/plain">
                <input 
                  className="rounded-lg border px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  style={{borderColor: 'var(--border-strong)', backgroundColor: 'var(--card-bg)'}}
                  name="name" 
                  placeholder="Your name" 
                />
                <input 
                  className="rounded-lg border px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  style={{borderColor: 'var(--border-strong)', backgroundColor: 'var(--card-bg)'}}
                  name="email" 
                  placeholder="Your email" 
                  type="email" 
                />
                <textarea 
                  className="rounded-lg border px-4 py-2.5 min-h-32 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  style={{borderColor: 'var(--border-strong)', backgroundColor: 'var(--card-bg)'}}
                  name="message" 
                  placeholder="How can we help?" 
                />
                <button className="inline-flex items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity" type="submit">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t" style={{borderColor: 'var(--border)'}}>
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm" style={{color: 'var(--muted)'}}>
          © {new Date().getFullYear()} Dr Moustafa Saoud. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

type ServiceCardProps = {
  title: string;
};

function ServiceCard({ title }: ServiceCardProps) {
  return (
    <div 
      className="rounded-2xl border p-5 transition-colors hover:shadow-sm" 
      style={{
        borderColor: 'var(--border)', 
        backgroundColor: 'var(--card-bg)'
      }}
    >
      <div className="text-sm font-medium" style={{color: 'var(--foreground)'}}>{title}</div>
    </div>
  );
}

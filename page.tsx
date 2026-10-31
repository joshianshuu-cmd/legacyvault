'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Upload, Share2, ShieldCheck, Gem, Users, Lock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LegacyVaultPage() {

  return (
    <main className="container mx-auto px-4 py-12">
      {/* HERO */}
      <motion.section 
        className="mx-auto max-w-5xl pt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-headline tracking-wide text-primary">
          Preserve Your Legacy, Forever.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Welcome to Legacy Vault, the platform where your cherished memories become immortal digital heirlooms on the blockchain.
        </p>
        <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="https://legacyvault.thehouseofjoshi.com/mint">Mint Your First Heirloom</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://legacyvault.thehouseofjoshi.com/">Learn More</Link>
            </Button>
        </div>
      </motion.section>

      {/* THREE STEPS */}
      <section className="mx-auto max-w-6xl mt-24">
        <h2 className="text-3xl md:text-4xl font-headline text-center text-primary mb-12">
            A Timeless Process in Three Steps
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transforming your memories into a digital legacy is a simple and secure journey.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
            <StepCard 
                title="Connect & Prepare" 
                description="Securely connect your wallet and gather the digital files and stories you wish to preserve." 
                icon={<Wallet className="h-8 w-8 text-primary"/>} 
            />
            <StepCard 
                title="Mint Your Heirloom" 
                description="Upload your item, add its story, and mint it as a unique NFT on the secure Base blockchain." 
                icon={<Upload className="h-8 w-8 text-primary"/>}
            />
            <StepCard 
                title="Manage & Inherit" 
                description="View your collection, manage your legacy, and designate who will inherit your heirlooms in the future." 
                icon={<Share2 className="h-8 w-8 text-primary"/>}
            />
        </div>
      </section>

      {/* BUILT FOR ETERNITY */}
      <section className="mx-auto max-w-6xl mt-24">
         <h2 className="text-3xl md:text-4xl font-headline text-center text-primary mb-12">
            Built for Eternity
        </h2>
         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Legacy Vault provides the tools you need to secure your story for the generations to come.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
                title="Immutable Legacy"
                description="Mint your heirlooms as ERC-721 NFTs on the Base blockchain, ensuring they last for generations."
                icon={<ShieldCheck className="h-10 w-10 text-primary" />}
            />
             <FeatureCard 
                title="Simple Minting"
                description="An intuitive interface lets you upload files, add stories, and mint your digital legacy in minutes."
                icon={<Gem className="h-10 w-10 text-primary" />}
            />
             <FeatureCard 
                title="Family First"
                description="Designate heirs and manage who can view your collection with private sharing links."
                icon={<Users className="h-10 w-10 text-primary" />}
            />
        </div>
      </section>

      {/* EXCLUSIVE ACCESS */}
       <section className="mx-auto max-w-3xl mt-24 mb-16">
        <Card className="text-center bg-card/80 border-primary/20 p-8">
            <CardHeader>
                <div className="flex justify-center mb-4">
                    <Lock className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-3xl text-primary">
                    Exclusive Access
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    A subscription unlocks your personal dashboard to manage and grow your digital heirloom collection.
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link href="https://legacyvault.thehouseofjoshi.com/dashboard">Access Your Dashboard</Link>
                </Button>
            </CardContent>
        </Card>
      </section>
    </main>
  );
}


function StepCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
    return (
        <div className="relative text-center p-6 rounded-lg bg-card border border-border/50 transition-all hover:border-primary/40 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-headline text-primary mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    )
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
    return (
        <Card className="text-center p-8">
            <CardHeader className="p-0 items-center">
                 <div className="mb-4">{icon}</div>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-4">
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}
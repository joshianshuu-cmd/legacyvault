export const metadata = { title: 'Contact' }

export default function ContactPage() {
    return (
        <main className="container mx-auto py-12 px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-headline font-bold mb-6">Contact Us</h1>
                <p className="text-muted-foreground mb-8">
                    We'd love to hear from you. Reach out through any of the channels below.
                </p>

                <div className="space-y-6">
                    <div className="bg-card/50 p-6 rounded-lg border">
                        <h2 className="text-xl font-semibold mb-2">Email Support</h2>
                        <p className="text-muted-foreground mb-3">
                            For support inquiries, email us directly:
                        </p>
                        <a 
                            href="mailto:Contact-support@thehouseofjoshi.com" 
                            className="text-primary hover:underline text-lg"
                        >
                            Contact-support@thehouseofjoshi.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-3">
                            Please include details about your issue and the best time to reach you.
                        </p>
                    </div>

                    <div className="bg-card/50 p-6 rounded-lg border">
                        <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
                        <p className="text-muted-foreground mb-3">
                            Stay connected with us on social media:
                        </p>
                        <a 
                            href="https://www.instagram.com/thehouseofjoshi/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-lg"
                        >
                            @thehouseofjoshi on Instagram
                        </a>
                    </div>

                    <div className="bg-card/50 p-6 rounded-lg border">
                        <h2 className="text-xl font-semibold mb-2">Website</h2>
                        <p className="text-muted-foreground mb-3">
                            Visit our main website for more information:
                        </p>
                        <a 
                            href="https://thehouseofjoshi.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-lg"
                        >
                            thehouseofjoshi.com
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

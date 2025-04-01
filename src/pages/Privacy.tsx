
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Data Collection</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert">
            <p>
              Capstone Creator Hub is committed to protecting your privacy. We only collect minimal information necessary for the service to function.
            </p>
            <p>
              When you use our generator, your selected preferences and saved favorites are stored locally on your device using browser storage. This data never reaches our servers.
            </p>
            <p>
              If you choose to contact us through the contact form, we'll collect your name, email, and message content for the purpose of responding to your inquiry.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Cookies</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert">
            <p>
              We use only essential cookies to remember your theme preference and to store your favorite project titles locally. We do not use tracking cookies or any third-party analytics tools.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert">
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page.
            </p>
            <p>
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;

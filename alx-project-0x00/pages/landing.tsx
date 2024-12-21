import Button from "@/components/Button";
import Card from "@/components/Card"

const Landing: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <div className="space-x-4 mt-4">
                <Button title="Test" size="small" shape="rounded-full" variant="primary" />
                <Button title="Test" size="medium" shape="rounded-md" variant="secondary" />
            </div>
            <Card />
        </div>
    )
}

export default Landing;

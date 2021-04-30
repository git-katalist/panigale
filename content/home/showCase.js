import image from "../../public/pic1.png";
// import Image from "next/image";

const prefix = "/panigale";

// NOTES //
const Title = () => {
    return <>The Showcase</>;
};
const Excerpt = () => {
    return <h1>Howdy my partner</h1>;
};

// NOTES //
const Image = () => {
    return <img src={prefix + image} alt="" />;
};

// NOTES //
const Showcase = () => {
    return (
        <>
            <p>Say Hello</p>
        </>
    );
};

export { Title, Excerpt, Showcase, Image };

import { EditButton } from "./EditButton";

const style = {
    width: "300px",
    height: "200px",
    margin: "8px",
    borderRadius: "8px",
    backgroundColor: "#E9DBD0",
    display: "flex",
    justifyDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};

export const Card = props => {

    const { isAdmin } = props;

    return (
        <>
            <div style = {style}>
                <p>山田太郎</p>
                <EditButton isAdmin = {isAdmin} />
            </div>
        </>
    );

}
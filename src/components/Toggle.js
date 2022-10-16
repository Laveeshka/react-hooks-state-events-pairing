

function Toggle({ showComments, onButtonClick }) {

    const buttonText = showComments ? "Hide Comments" : "Show Comments";
    const button = (
        <button type="text" onClick={() => onButtonClick(!showComments)}>{buttonText}</button>
    )


    return (
        <>
            {button}
        </>
    )
}

export default Toggle;
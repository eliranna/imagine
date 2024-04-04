import ReactMarkdown from "react-markdown";

const Markdown = ({children}: {children: string | null | undefined}) => (
    <ReactMarkdown className={'markdown'}>
        {children}
    </ReactMarkdown>
)

export default Markdown
interface articleCardProps {
    content: string,
    title: string
}
export default function ArticleCard({ content, title }: articleCardProps) {

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition mb-5">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">{title}</h2>
            <p className="text-gray-700 leading-relaxed">
                {content.slice(0, 69)}
                {content.length > 70 && " ..."}
            </p>
        </div>

    )
}
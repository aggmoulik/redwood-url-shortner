import UrlCell from 'src/components/URL/URLCell'

type UrlPageProps = {
  id: number
}

const UrlPage = ({ id }: UrlPageProps) => {
  return <UrlCell id={id} />
}

export default UrlPage

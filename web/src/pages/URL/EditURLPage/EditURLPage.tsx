import EditUrlCell from 'src/components/URL/EditURLCell'

type UrlPageProps = {
  id: number
}

const EditUrlPage = ({ id }: UrlPageProps) => {
  return <EditUrlCell id={id} />
}

export default EditUrlPage

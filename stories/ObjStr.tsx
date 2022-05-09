type ArgTypes = {
  normal: string;
  createData: {
    phoneNumber: string;
  }
}

export const ObjStr = ({ normal, createData }: ArgTypes) => {
  return <div>
    <p>normal: { normal }</p>
    <p>createData: {JSON.stringify(createData)}</p>
  </div>
}
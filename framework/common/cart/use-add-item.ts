const useAddItem = () => {
  return (input: any) => ( {
    output: JSON.stringify(input) + '_modified'
  })
}

export default useAddItem;
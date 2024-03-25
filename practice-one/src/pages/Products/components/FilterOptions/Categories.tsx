import { TCategory } from '../../../../types'
import Button from '../../../../components/Button'

const Categories = ({
  value,
  setValue,
}: {
  value?: TCategory
  setValue: React.Dispatch<React.SetStateAction<TCategory | undefined>>
}) => {
  return (
    <div className="border-b-2 border-solid py-4">
      <p className=" mb-2 text-lg capitalize">categories</p>
      <div className="flex gap-2">
        <Button
          size="small"
          checked={value === 'men'}
          variant="secondary"
          onClick={() => {
            if (value === 'men') setValue(undefined)
            else setValue('men')
          }}
        >
          Men
        </Button>
        <Button
          size="small"
          checked={value === 'women'}
          variant="secondary"
          onClick={() => {
            if (value === 'women') setValue(undefined)
            else setValue('women')
          }}
        >
          Woman
        </Button>
        <Button
          size="small"
          checked={value === 'children'}
          variant="secondary"
          onClick={() => {
            if (value === 'children') setValue(undefined)
            else setValue('children')
          }}
        >
          Children
        </Button>
      </div>
    </div>
  )
}

export default Categories

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { MoreHorizontal } from "lucide-react"
import { useNavigate } from "react-router-dom"



const FoodItemsTable = () => {
    const id = 123
    const navigate = useNavigate()
    return (
        <div className="mt-5">
            <Table>
                <TableCaption>A list of your recent Add Food Items.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Food Item</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Discount</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                {
                    [1, 2, 3, 4, 5, 6].map((item, index) => {
                        return (
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Bugger</TableCell>
                                    <TableCell>Rs : 10</TableCell>
                                    <TableCell>10%</TableCell>
                                    <TableCell className="text-right">
                                        <Popover className="w-fit">
                                            <PopoverTrigger> <MoreHorizontal /></PopoverTrigger>
                                            <PopoverContent className="w-fit">
                                                <div className="flex flex-col gap-2" >
                                                    <p className="p-1 font-semibold text-sm cursor-pointer text-red-500">Delete</p>
                                                    <hr />
                                                    <p onClick={() => navigate(`/admin/items/${id}`)} className="p-1 font-semibold text-sm cursor-pointer">Edit</p>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        )
                    })
                }
            </Table>

        </div>
    )
}

export default FoodItemsTable
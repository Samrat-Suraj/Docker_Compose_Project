import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { MoreHorizontal } from "lucide-react"
import { useNavigate } from "react-router-dom"



const RestaurantTable = () => {
    const navigate = useNavigate()
    const id = 123
    return (
        <div className="mt-9">
            <Table>
                <TableCaption>A list of your recent Created Restaurant.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        return (
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                    </TableCell>
                                    <TableCell>Paid</TableCell>
                                    <TableCell>Credit Card</TableCell>
                                    <TableCell className="text-right">
                                        <Popover className="w-fit">
                                            <PopoverTrigger> <MoreHorizontal /></PopoverTrigger>
                                            <PopoverContent className="w-fit">
                                                <div className="flex flex-col gap-2" >
                                                    <p className="p-1 font-semibold text-sm cursor-pointer text-red-500">Delete</p>
                                                    <hr />
                                                    <p onClick={() => navigate(`/admin/restaurant/register/${id}`)} className="p-1 font-semibold text-sm cursor-pointer">Edit</p>
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

export default RestaurantTable
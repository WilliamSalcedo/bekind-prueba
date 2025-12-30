export interface Action {
    id: string
    name: string
    description: string
    icon: string
    color: string
    status: 0 | 1
    createdAt: string
}

export interface ActionsResponse {
    pageSize: number
    pageNumber: number
    totalElements: number
    totalPages: number
    data: Action[]

}

export interface ActionApiResponse {
    data: ActionsResponse
}
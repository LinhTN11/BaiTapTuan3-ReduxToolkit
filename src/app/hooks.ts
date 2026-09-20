import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// Pre-typed hooks: mọi component chỉ dùng 2 hooks này thay vì useDispatch/useSelector thuần
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

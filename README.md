if getting an error
```
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
```
cannot find swiper/modules and swiper/react

then do 

```
npm install swiper@latest

```

error in these three lines 
```
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
```
then do 
```
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
```

if error is in layout.tsx in this line 
```
import './globals.css'
```
then 
```
import "@/styles/globals.css"
```


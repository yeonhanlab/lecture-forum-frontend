// Enum 타입
// 프론트엔드에서는 프리즈마가 없으니까 내가 써줘야하는 것


// enum 키워드를 통해서 타입을 작성하는 방법이 2년 전까지는 통용 되었음
// enum GenderType {}
//      MALE = "MALE",
//      FEMALE = "FEMALE",
// }

//회사에서는 구버전이 많을것이므로 아래방법으로 바꿔줘야함.

export const Gender = {
    MALE: "MALE",
    FEMALE: "FEMALE",
}

export type GenderType = typeof Gender[keyof typeof Gender];

type UserProfileProps = {
  /**
   * 변형(표지 스타일)
   */
  variant?: 'normal' | 'small'
  /**
   * 사용자명
   */
  username: string
  /**
   * 사용자 프로필 이미지 URL
   */
  profileImageUrl: string
  /**
   * 사용자가 소유한 상품 수
   */
  numberOfProducts: number
  /**
   * 사용자 설명
   */
  description?: string
}

const UserProfile = ({
  variant = 'normal',
  username,
  profileImageUrl,
  numberOfProducts,
  description,
}: UserProfileProps) => {
  return <div>UserProfile</div>
}

export default UserProfile

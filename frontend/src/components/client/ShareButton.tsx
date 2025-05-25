interface ShareButtonProps {
  recipeId: number;
}

const ShareButton = ({ recipeId }: ShareButtonProps) => {
  const shareUrl = `${window.location.origin}/client/recipe/${recipeId}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Check out this recipe!",
        url: shareUrl,
      });
    } else {
      alert(`Share this recipe: ${shareUrl}`);
    }
  };

  return (
    <button onClick={handleShare} className="px-4 py-2 bg-orange-500 text-white rounded-md">
      Share
    </button>
  );
};

export default ShareButton;
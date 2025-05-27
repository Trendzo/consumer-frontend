import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import GlassPanels from "@/components/layout/GlassPanels";
import Card from "@/components/ui/Card";

export default function Loading() {
  return (
    <>
      <GlassPanels />
      <Header />

      <Container className="pb-20 pt-2">
        {/* Product Header Skeleton */}
        <div className="my-6">
          <div className="h-10 w-64 glass animate-pulse rounded-lg mb-2"></div>
          <div className="h-5 w-48 glass animate-pulse rounded-lg"></div>
        </div>

        {/* Product Content Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Image Skeleton */}
          <div className="h-[400px] glass animate-pulse rounded-xl"></div>

          {/* Product Details Skeleton */}
          <div className="space-y-6">
            <Card variant="glass" className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-24 glass animate-pulse rounded-lg"></div>
                  <div className="h-5 w-16 glass animate-pulse rounded-lg"></div>
                  <div className="h-5 w-12 glass animate-pulse rounded-lg"></div>
                </div>
                <div className="h-5 w-20 glass animate-pulse rounded-lg"></div>
              </div>

              <div className="mb-4">
                <div className="h-5 w-20 glass animate-pulse rounded-lg mb-2"></div>
                <div className="flex gap-2">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-8 w-8 glass animate-pulse rounded-full"
                    ></div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="h-5 w-20 glass animate-pulse rounded-lg mb-2"></div>
                <div className="flex gap-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-8 w-12 glass animate-pulse rounded-full"
                    ></div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="h-5 w-20 glass animate-pulse rounded-lg mb-2"></div>
                <div className="flex items-center glass rounded-full w-24 h-8 animate-pulse"></div>
              </div>

              <div className="h-12 w-full glass animate-pulse rounded-lg"></div>
            </Card>

            <Card variant="glass" className="p-4">
              <div className="h-6 w-40 glass animate-pulse rounded-lg mb-2"></div>
              <div className="h-16 w-full glass animate-pulse rounded-lg"></div>
            </Card>
          </div>
        </div>

        {/* Related Products Skeleton */}
        <div className="my-12">
          <div className="h-8 w-64 glass animate-pulse rounded-lg mb-6"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-64 glass animate-pulse rounded-xl"
              ></div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

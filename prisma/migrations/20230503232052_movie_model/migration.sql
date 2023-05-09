-- CreateTable
CREATE TABLE "movie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "sequential" TEXT NOT NULL,
    "trilogy" TEXT NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Counter" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "cnt_two" JSONB NOT NULL DEFAULT '{}',
    "cnt_three" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "Counter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Counter_name_key" ON "Counter"("name");
